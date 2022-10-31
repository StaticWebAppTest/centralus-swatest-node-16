module.exports = async function (context, req) {
  const date = "2022-10-31T16:17:43.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

