module.exports = async function (context, req) {
  const date = "2023-12-16T12:15:19.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

