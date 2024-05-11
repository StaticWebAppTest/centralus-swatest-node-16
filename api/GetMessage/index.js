module.exports = async function (context, req) {
  const date = "2024-05-11T14:07:51.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

