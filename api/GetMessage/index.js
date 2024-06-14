module.exports = async function (context, req) {
  const date = "2024-06-14T10:10:34.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

