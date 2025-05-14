module.exports = async function (context, req) {
  const date = "2025-05-14T14:13:33.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

