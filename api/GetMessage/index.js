module.exports = async function (context, req) {
  const date = "2024-02-13T05:08:54.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

