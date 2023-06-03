module.exports = async function (context, req) {
  const date = "2023-06-03T20:09:35.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

