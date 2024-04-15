module.exports = async function (context, req) {
  const date = "2024-04-15T07:07:35.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

