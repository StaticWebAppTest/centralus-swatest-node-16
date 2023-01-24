module.exports = async function (context, req) {
  const date = "2023-01-24T11:08:00.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

