module.exports = async function (context, req) {
  const date = "2024-12-16T18:17:27.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

