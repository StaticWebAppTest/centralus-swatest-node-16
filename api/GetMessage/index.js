module.exports = async function (context, req) {
  const date = "2023-05-13T12:14:56.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

