module.exports = async function (context, req) {
  const date = "2024-06-20T04:12:01.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

