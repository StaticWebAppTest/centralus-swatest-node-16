module.exports = async function (context, req) {
  const date = "2024-06-18T04:12:21.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

