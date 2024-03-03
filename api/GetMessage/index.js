module.exports = async function (context, req) {
  const date = "2024-03-03T23:08:20.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

