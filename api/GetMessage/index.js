module.exports = async function (context, req) {
  const date = "2024-08-09T12:19:45.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

