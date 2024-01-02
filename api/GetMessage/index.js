module.exports = async function (context, req) {
  const date = "2024-01-02T09:09:21.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

