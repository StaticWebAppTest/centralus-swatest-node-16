module.exports = async function (context, req) {
  const date = "2024-03-24T12:15:33.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

