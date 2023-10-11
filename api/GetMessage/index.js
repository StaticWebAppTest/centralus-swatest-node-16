module.exports = async function (context, req) {
  const date = "2023-10-11T00:40:43.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

