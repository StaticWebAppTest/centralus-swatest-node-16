module.exports = async function (context, req) {
  const date = "2024-03-13T22:08:45.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

