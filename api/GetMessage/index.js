module.exports = async function (context, req) {
  const date = "2025-09-08T10:14:01.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

