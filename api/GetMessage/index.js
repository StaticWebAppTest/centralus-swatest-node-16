module.exports = async function (context, req) {
  const date = "2024-05-07T12:17:15.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

