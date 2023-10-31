module.exports = async function (context, req) {
  const date = "2023-10-31T22:07:57.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

