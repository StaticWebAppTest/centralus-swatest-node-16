module.exports = async function (context, req) {
  const date = "2022-04-12T16:13:13.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

