module.exports = async function (context, req) {
  const date = "2024-01-13T14:08:07.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

