module.exports = async function (context, req) {
  const date = "2024-03-04T01:58:08.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

