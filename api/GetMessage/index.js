module.exports = async function (context, req) {
  const date = "2023-06-30T19:07:27.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

