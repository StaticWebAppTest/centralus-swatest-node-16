module.exports = async function (context, req) {
  const date = "2024-08-14T10:11:51.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

