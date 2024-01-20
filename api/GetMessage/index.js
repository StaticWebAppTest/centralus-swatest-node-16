module.exports = async function (context, req) {
  const date = "2024-01-20T13:09:37.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

