module.exports = async function (context, req) {
  const date = "2023-04-01T02:00:50.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

