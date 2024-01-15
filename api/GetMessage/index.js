module.exports = async function (context, req) {
  const date = "2024-01-15T09:10:17.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

