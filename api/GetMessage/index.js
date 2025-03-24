module.exports = async function (context, req) {
  const date = "2025-03-24T15:13:46.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

