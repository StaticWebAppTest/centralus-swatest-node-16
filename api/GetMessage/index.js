module.exports = async function (context, req) {
  const date = "2022-06-14T16:15:56.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

