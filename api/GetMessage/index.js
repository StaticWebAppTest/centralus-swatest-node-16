module.exports = async function (context, req) {
  const date = "2023-07-20T22:08:17.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

