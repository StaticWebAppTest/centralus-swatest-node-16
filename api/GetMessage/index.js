module.exports = async function (context, req) {
  const date = "2023-12-25T12:16:24.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

