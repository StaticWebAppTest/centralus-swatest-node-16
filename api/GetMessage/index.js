module.exports = async function (context, req) {
  const date = "2024-07-01T22:10:39.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

