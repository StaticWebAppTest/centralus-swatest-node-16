module.exports = async function (context, req) {
  const date = "2022-08-21T03:35:33.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

