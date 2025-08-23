module.exports = async function (context, req) {
  const date = "2025-08-23T18:16:25.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

