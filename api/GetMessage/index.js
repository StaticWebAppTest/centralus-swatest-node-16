module.exports = async function (context, req) {
  const date = "2024-04-13T03:08:07.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

