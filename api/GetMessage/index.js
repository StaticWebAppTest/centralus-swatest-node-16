module.exports = async function (context, req) {
  const date = "2024-04-13T13:09:00.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

