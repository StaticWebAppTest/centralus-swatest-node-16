module.exports = async function (context, req) {
  const date = "2022-08-05T16:16:20.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

