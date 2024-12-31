module.exports = async function (context, req) {
  const date = "2024-12-31T22:10:36.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

