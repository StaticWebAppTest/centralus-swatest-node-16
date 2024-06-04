module.exports = async function (context, req) {
  const date = "2024-06-04T20:10:12.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

