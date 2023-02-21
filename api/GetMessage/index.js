module.exports = async function (context, req) {
  const date = "2023-02-21T03:15:54.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

