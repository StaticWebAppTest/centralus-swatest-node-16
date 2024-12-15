module.exports = async function (context, req) {
  const date = "2024-12-15T18:15:32.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

