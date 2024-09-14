module.exports = async function (context, req) {
  const date = "2024-09-14T10:10:34.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

