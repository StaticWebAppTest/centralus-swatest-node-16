module.exports = async function (context, req) {
  const date = "2024-01-28T01:46:47.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

