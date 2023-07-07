module.exports = async function (context, req) {
  const date = "2023-07-07T12:20:22.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

