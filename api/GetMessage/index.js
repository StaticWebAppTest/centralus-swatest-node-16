module.exports = async function (context, req) {
  const date = "2024-02-03T16:11:25.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

