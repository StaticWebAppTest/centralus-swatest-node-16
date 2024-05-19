module.exports = async function (context, req) {
  const date = "2024-05-19T04:12:32.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

