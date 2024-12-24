module.exports = async function (context, req) {
  const date = "2024-12-24T22:10:42.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

