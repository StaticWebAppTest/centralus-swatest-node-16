module.exports = async function (context, req) {
  const date = "2024-01-02T15:09:12.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

