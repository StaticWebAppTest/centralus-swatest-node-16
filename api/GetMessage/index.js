module.exports = async function (context, req) {
  const date = "2023-11-01T12:16:50.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

