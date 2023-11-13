module.exports = async function (context, req) {
  const date = "2023-11-13T00:43:19.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

