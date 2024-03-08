module.exports = async function (context, req) {
  const date = "2024-03-08T14:09:16.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

