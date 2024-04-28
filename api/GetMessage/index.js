module.exports = async function (context, req) {
  const date = "2024-04-28T13:09:47.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

