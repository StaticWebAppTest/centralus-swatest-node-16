module.exports = async function (context, req) {
  const date = "2023-07-09T21:08:13.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

