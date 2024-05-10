module.exports = async function (context, req) {
  const date = "2024-05-10T21:08:46.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

