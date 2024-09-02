module.exports = async function (context, req) {
  const date = "2024-09-02T09:12:55.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

