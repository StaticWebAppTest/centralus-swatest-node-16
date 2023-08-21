module.exports = async function (context, req) {
  const date = "2023-08-21T15:08:36.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

