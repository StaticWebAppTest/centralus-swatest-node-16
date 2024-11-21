module.exports = async function (context, req) {
  const date = "2024-11-21T18:16:42.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

