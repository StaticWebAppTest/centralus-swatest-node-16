module.exports = async function (context, req) {
  const date = "2024-02-08T08:11:35.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

