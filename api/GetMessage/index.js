module.exports = async function (context, req) {
  const date = "2024-07-08T00:50:25.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

