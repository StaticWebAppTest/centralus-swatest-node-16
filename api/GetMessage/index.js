module.exports = async function (context, req) {
  const date = "2023-10-05T14:08:37.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

