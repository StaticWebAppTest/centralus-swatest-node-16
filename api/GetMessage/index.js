module.exports = async function (context, req) {
  const date = "2023-09-24T22:07:25.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

