module.exports = async function (context, req) {
  const date = "2024-07-24T04:12:25.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

