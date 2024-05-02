module.exports = async function (context, req) {
  const date = "2024-05-02T16:11:22.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

