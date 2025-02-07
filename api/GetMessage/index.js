module.exports = async function (context, req) {
  const date = "2025-02-07T04:15:05.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

