module.exports = async function (context, req) {
  const date = "2023-11-06T01:50:26.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

