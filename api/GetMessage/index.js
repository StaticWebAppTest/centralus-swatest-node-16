module.exports = async function (context, req) {
  const date = "2024-04-08T03:10:46.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

