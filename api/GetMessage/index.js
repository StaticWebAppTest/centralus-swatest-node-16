module.exports = async function (context, req) {
  const date = "2022-08-20T22:10:32.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

