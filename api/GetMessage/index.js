module.exports = async function (context, req) {
  const date = "2022-07-21T03:35:10.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

