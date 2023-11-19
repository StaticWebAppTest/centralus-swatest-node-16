module.exports = async function (context, req) {
  const date = "2023-11-19T21:07:32.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

