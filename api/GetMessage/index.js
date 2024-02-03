module.exports = async function (context, req) {
  const date = "2024-02-03T03:11:22.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

