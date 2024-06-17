module.exports = async function (context, req) {
  const date = "2024-06-17T04:13:36.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

