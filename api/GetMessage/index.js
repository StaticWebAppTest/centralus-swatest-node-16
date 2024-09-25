module.exports = async function (context, req) {
  const date = "2024-09-25T22:10:37.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

