module.exports = async function (context, req) {
  const date = "2022-11-16T16:14:31.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

