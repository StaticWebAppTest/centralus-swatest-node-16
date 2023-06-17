module.exports = async function (context, req) {
  const date = "2023-06-17T10:08:42.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

