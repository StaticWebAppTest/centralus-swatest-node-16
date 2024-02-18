module.exports = async function (context, req) {
  const date = "2024-02-18T04:10:28.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

