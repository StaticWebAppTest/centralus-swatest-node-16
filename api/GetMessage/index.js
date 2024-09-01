module.exports = async function (context, req) {
  const date = "2024-09-01T22:11:10.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

