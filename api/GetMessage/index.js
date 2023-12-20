module.exports = async function (context, req) {
  const date = "2023-12-20T09:07:58.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

