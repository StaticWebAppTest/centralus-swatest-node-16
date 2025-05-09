module.exports = async function (context, req) {
  const date = "2025-05-09T12:25:30.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

