module.exports = async function (context, req) {
  const date = "2024-06-04T19:08:20.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

