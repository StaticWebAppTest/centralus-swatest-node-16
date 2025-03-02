module.exports = async function (context, req) {
  const date = "2025-03-02T08:14:01.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

