module.exports = async function (context, req) {
  const date = "2024-11-25T01:01:01.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

