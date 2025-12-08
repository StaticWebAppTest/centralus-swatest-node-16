module.exports = async function (context, req) {
  const date = "2025-12-08T15:15:51.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

