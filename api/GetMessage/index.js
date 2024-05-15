module.exports = async function (context, req) {
  const date = "2024-05-15T22:10:50.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

