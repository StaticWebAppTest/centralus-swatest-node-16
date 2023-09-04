module.exports = async function (context, req) {
  const date = "2023-09-04T12:16:32.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

