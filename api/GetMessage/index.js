module.exports = async function (context, req) {
  const date = "2025-05-02T15:13:15.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

