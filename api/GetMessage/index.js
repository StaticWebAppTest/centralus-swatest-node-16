module.exports = async function (context, req) {
  const date = "2024-05-13T12:18:24.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

