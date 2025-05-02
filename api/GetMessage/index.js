module.exports = async function (context, req) {
  const date = "2025-05-02T11:11:13.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

