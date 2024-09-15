module.exports = async function (context, req) {
  const date = "2024-09-15T15:10:22.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

