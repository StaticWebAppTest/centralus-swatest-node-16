module.exports = async function (context, req) {
  const date = "2025-02-03T09:13:34.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

