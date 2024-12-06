module.exports = async function (context, req) {
  const date = "2024-12-06T11:10:43.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

