module.exports = async function (context, req) {
  const date = "2024-03-04T21:08:44.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

