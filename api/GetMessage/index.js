module.exports = async function (context, req) {
  const date = "2023-10-27T03:09:18.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

