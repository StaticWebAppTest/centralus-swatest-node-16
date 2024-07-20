module.exports = async function (context, req) {
  const date = "2024-07-20T15:09:20.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

