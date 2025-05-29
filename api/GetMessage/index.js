module.exports = async function (context, req) {
  const date = "2025-05-29T15:13:42.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

