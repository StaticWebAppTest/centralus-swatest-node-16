module.exports = async function (context, req) {
  const date = "2024-12-14T15:11:39.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

