module.exports = async function (context, req) {
  const date = "2024-08-28T06:15:27.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

