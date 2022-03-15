module.exports = async function (context, req) {
  const date = "2022-03-15T08:12:56.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

