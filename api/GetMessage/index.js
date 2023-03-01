module.exports = async function (context, req) {
  const date = "2023-03-01T03:24:35.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

