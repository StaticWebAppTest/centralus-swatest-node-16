module.exports = async function (context, req) {
  const date = "2024-11-08T08:15:04.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

