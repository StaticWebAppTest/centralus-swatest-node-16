module.exports = async function (context, req) {
  const date = "2024-10-13T12:20:11.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

