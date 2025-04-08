module.exports = async function (context, req) {
  const date = "2025-04-08T13:23:52.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

