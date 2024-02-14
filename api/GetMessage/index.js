module.exports = async function (context, req) {
  const date = "2024-02-14T15:08:49.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

