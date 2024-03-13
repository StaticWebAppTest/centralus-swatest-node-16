module.exports = async function (context, req) {
  const date = "2024-03-13T23:09:17.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

