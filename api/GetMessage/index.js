module.exports = async function (context, req) {
  const date = "2024-04-04T08:12:36.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

