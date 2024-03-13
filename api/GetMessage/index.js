module.exports = async function (context, req) {
  const date = "2024-03-13T16:44:25.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

