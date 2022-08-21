module.exports = async function (context, req) {
  const date = "2022-08-21T17:12:26.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

