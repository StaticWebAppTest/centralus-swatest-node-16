module.exports = async function (context, req) {
  const date = "2024-02-03T05:07:49.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

