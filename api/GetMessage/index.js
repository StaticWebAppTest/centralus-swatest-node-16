module.exports = async function (context, req) {
  const date = "2024-06-12T15:09:22.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

