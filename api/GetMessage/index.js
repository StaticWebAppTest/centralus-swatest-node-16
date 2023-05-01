module.exports = async function (context, req) {
  const date = "2023-05-01T15:08:46.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

