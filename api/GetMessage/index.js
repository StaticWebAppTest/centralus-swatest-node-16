module.exports = async function (context, req) {
  const date = "2024-05-15T16:12:14.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

