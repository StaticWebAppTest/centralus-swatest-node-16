module.exports = async function (context, req) {
  const date = "2022-08-21T08:13:38.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

