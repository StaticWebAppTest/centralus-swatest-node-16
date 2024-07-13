module.exports = async function (context, req) {
  const date = "2024-07-13T19:08:23.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

