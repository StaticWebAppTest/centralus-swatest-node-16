module.exports = async function (context, req) {
  const date = "2024-03-13T17:09:23.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

