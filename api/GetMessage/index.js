module.exports = async function (context, req) {
  const date = "2023-02-20T05:09:43.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

