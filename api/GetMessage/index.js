module.exports = async function (context, req) {
  const date = "2023-12-13T21:08:22.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

