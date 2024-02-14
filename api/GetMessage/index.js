module.exports = async function (context, req) {
  const date = "2024-02-14T09:08:48.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

