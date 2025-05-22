module.exports = async function (context, req) {
  const date = "2025-05-22T09:14:09.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

