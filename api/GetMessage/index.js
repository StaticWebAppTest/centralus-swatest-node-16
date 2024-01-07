module.exports = async function (context, req) {
  const date = "2024-01-07T04:11:07.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

