module.exports = async function (context, req) {
  const date = "2023-01-13T11:08:04.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

