module.exports = async function (context, req) {
  const date = "2024-07-01T12:20:14.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

