module.exports = async function (context, req) {
  const date = "2023-09-26T00:41:04.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

