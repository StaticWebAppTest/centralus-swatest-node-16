module.exports = async function (context, req) {
  const date = "2024-06-09T10:09:37.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

