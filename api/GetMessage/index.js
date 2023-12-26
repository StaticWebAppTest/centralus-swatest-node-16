module.exports = async function (context, req) {
  const date = "2023-12-26T12:16:00.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

