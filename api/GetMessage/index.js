module.exports = async function (context, req) {
  const date = "2023-08-12T15:07:25.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

