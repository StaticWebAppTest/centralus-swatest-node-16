module.exports = async function (context, req) {
  const date = "2024-08-09T11:09:22.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

