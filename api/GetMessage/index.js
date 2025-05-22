module.exports = async function (context, req) {
  const date = "2025-05-22T11:11:54.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

