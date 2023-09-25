module.exports = async function (context, req) {
  const date = "2023-09-25T12:17:14.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

