module.exports = async function (context, req) {
  const date = "2024-06-04T09:12:00.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

