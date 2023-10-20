module.exports = async function (context, req) {
  const date = "2023-10-20T16:11:21.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

