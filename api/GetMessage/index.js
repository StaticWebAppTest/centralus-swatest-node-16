module.exports = async function (context, req) {
  const date = "2024-04-26T19:07:45.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

