module.exports = async function (context, req) {
  const date = "2024-05-03T14:09:44.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

