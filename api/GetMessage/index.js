module.exports = async function (context, req) {
  const date = "2024-10-02T09:12:27.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

