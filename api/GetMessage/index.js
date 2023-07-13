module.exports = async function (context, req) {
  const date = "2023-07-13T12:20:35.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

