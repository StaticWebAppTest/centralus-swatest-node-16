module.exports = async function (context, req) {
  const date = "2025-05-04T17:10:38.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

