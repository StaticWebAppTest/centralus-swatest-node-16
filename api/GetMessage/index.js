module.exports = async function (context, req) {
  const date = "2024-05-11T00:43:08.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

