module.exports = async function (context, req) {
  const date = "2025-05-15T13:24:37.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

