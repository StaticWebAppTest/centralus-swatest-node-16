module.exports = async function (context, req) {
  const date = "2024-11-13T15:12:07.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

