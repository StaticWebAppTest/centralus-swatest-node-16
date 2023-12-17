module.exports = async function (context, req) {
  const date = "2023-12-17T10:08:56.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

