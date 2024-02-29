module.exports = async function (context, req) {
  const date = "2024-02-29T04:11:07.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

