module.exports = async function (context, req) {
  const date = "2024-07-20T21:09:12.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

