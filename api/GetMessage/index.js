module.exports = async function (context, req) {
  const date = "2023-08-15T12:15:21.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

