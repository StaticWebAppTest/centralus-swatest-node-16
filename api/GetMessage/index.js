module.exports = async function (context, req) {
  const date = "2022-03-13T00:40:27.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

