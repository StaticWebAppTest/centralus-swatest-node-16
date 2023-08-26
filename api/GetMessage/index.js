module.exports = async function (context, req) {
  const date = "2023-08-26T08:09:45.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

