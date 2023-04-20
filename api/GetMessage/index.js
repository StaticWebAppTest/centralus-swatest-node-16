module.exports = async function (context, req) {
  const date = "2023-04-20T02:31:50.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

