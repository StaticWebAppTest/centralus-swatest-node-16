module.exports = async function (context, req) {
  const date = "2024-05-19T02:26:31.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

