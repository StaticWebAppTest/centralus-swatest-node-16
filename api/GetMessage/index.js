module.exports = async function (context, req) {
  const date = "2023-09-01T18:09:22.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

