module.exports = async function (context, req) {
  const date = "2024-09-14T03:12:47.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

