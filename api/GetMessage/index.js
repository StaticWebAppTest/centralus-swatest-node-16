module.exports = async function (context, req) {
  const date = "2024-05-05T01:53:06.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

