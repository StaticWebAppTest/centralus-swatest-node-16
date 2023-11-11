module.exports = async function (context, req) {
  const date = "2023-11-11T22:07:22.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

