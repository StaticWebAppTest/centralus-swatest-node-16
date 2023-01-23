module.exports = async function (context, req) {
  const date = "2023-01-23T12:17:51.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

