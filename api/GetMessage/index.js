module.exports = async function (context, req) {
  const date = "2025-03-22T11:10:12.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

