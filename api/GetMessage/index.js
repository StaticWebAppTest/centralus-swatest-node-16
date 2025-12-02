module.exports = async function (context, req) {
  const date = "2025-12-02T14:15:44.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

