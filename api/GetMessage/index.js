module.exports = async function (context, req) {
  const date = "2024-05-31T13:11:09.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

