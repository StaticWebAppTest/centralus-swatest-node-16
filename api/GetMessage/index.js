module.exports = async function (context, req) {
  const date = "2024-12-22T10:11:07.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

