module.exports = async function (context, req) {
  const date = "2024-01-16T19:07:38.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

