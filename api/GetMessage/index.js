module.exports = async function (context, req) {
  const date = "2024-05-27T12:18:29.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

