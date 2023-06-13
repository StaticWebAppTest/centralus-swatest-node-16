module.exports = async function (context, req) {
  const date = "2023-06-13T09:08:50.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

