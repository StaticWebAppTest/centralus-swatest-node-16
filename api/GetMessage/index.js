module.exports = async function (context, req) {
  const date = "2023-11-28T12:17:20.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

