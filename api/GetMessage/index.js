module.exports = async function (context, req) {
  const date = "2023-01-13T03:12:03.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

