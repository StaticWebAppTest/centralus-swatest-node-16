module.exports = async function (context, req) {
  const date = "2024-09-07T15:10:36.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

