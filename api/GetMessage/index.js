module.exports = async function (context, req) {
  const date = "2024-09-24T03:17:17.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

