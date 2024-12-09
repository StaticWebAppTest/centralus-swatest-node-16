module.exports = async function (context, req) {
  const date = "2024-12-09T06:18:53.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

