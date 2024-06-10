module.exports = async function (context, req) {
  const date = "2024-06-10T20:10:36.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

