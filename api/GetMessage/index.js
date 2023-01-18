module.exports = async function (context, req) {
  const date = "2023-01-18T11:08:00.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

