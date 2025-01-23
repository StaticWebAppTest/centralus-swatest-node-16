module.exports = async function (context, req) {
  const date = "2025-01-23T11:09:37.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

