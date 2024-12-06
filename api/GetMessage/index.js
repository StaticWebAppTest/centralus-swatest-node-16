module.exports = async function (context, req) {
  const date = "2024-12-06T12:24:25.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

