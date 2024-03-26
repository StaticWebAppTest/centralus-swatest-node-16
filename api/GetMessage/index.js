module.exports = async function (context, req) {
  const date = "2024-03-26T13:09:28.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

