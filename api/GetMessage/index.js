module.exports = async function (context, req) {
  const date = "2024-05-06T12:17:36.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

