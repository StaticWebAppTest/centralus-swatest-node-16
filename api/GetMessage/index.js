module.exports = async function (context, req) {
  const date = "2023-04-06T12:16:42.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

