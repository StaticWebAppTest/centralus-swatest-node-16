module.exports = async function (context, req) {
  const date = "2024-06-24T21:09:45.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

