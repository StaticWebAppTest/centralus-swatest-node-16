module.exports = async function (context, req) {
  const date = "2023-02-14T03:14:06.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

