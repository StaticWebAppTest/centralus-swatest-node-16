module.exports = async function (context, req) {
  const date = "2023-11-20T16:12:31.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

