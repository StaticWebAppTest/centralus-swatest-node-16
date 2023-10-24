module.exports = async function (context, req) {
  const date = "2023-10-24T00:40:57.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

