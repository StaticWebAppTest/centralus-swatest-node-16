module.exports = async function (context, req) {
  const date = "2023-04-09T08:10:22.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

