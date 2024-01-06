module.exports = async function (context, req) {
  const date = "2024-01-06T11:07:06.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

