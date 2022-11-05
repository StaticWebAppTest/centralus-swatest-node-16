module.exports = async function (context, req) {
  const date = "2022-11-05T21:09:43.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

