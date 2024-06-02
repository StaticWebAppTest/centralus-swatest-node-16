module.exports = async function (context, req) {
  const date = "2024-06-02T06:13:54.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

