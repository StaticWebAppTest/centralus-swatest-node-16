module.exports = async function (context, req) {
  const date = "2025-09-02T05:13:18.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

