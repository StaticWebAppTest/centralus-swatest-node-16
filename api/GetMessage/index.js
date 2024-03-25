module.exports = async function (context, req) {
  const date = "2024-03-25T10:10:04.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

