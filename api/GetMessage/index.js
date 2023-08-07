module.exports = async function (context, req) {
  const date = "2023-08-07T10:09:31.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

