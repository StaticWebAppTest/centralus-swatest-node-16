module.exports = async function (context, req) {
  const date = "2023-05-29T23:08:26.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

