module.exports = async function (context, req) {
  const date = "2023-06-13T12:17:42.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

