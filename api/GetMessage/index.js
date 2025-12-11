module.exports = async function (context, req) {
  const date = "2025-12-11T11:13:28.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

