module.exports = async function (context, req) {
  const date = "2024-09-26T07:11:52.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

