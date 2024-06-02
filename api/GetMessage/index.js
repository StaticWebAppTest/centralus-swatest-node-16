module.exports = async function (context, req) {
  const date = "2024-06-02T23:09:38.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

