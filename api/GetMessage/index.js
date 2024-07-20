module.exports = async function (context, req) {
  const date = "2024-07-20T07:09:58.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

