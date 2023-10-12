module.exports = async function (context, req) {
  const date = "2023-10-12T12:17:06.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

