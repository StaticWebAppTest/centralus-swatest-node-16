module.exports = async function (context, req) {
  const date = "2024-01-12T02:25:22.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

