module.exports = async function (context, req) {
  const date = "2023-12-16T23:08:43.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

