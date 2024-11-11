module.exports = async function (context, req) {
  const date = "2024-11-11T14:12:24.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

