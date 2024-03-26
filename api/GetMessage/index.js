module.exports = async function (context, req) {
  const date = "2024-03-26T02:15:11.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

