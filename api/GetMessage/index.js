module.exports = async function (context, req) {
  const date = "2024-04-15T05:08:37.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

