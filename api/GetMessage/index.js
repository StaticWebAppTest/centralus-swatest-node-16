module.exports = async function (context, req) {
  const date = "2024-06-20T22:09:11.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

