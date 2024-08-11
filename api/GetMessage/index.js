module.exports = async function (context, req) {
  const date = "2024-08-11T15:09:58.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

