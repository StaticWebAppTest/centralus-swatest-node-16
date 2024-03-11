module.exports = async function (context, req) {
  const date = "2024-03-11T01:41:27.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

