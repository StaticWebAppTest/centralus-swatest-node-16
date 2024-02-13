module.exports = async function (context, req) {
  const date = "2024-02-13T19:06:48.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

