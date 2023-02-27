module.exports = async function (context, req) {
  const date = "2023-02-27T03:15:51.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

