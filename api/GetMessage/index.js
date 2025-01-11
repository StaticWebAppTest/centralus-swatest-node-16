module.exports = async function (context, req) {
  const date = "2025-01-11T13:15:12.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

