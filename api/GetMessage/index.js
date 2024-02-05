module.exports = async function (context, req) {
  const date = "2024-02-05T14:08:31.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

