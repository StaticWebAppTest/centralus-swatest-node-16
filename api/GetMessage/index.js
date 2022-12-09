module.exports = async function (context, req) {
  const date = "2022-12-09T19:08:20.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

