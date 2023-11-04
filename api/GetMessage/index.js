module.exports = async function (context, req) {
  const date = "2023-11-04T02:16:13.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

