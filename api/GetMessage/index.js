module.exports = async function (context, req) {
  const date = "2023-09-16T22:07:22.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

