module.exports = async function (context, req) {
  const date = "2024-01-20T04:11:23.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

