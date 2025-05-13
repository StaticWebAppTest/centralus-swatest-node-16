module.exports = async function (context, req) {
  const date = "2025-05-13T05:13:37.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

