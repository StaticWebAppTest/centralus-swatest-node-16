module.exports = async function (context, req) {
  const date = "2024-11-24T11:09:41.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

