module.exports = async function (context, req) {
  const date = "2024-01-11T01:53:22.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

