module.exports = async function (context, req) {
  const date = "2025-02-13T11:09:56.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

