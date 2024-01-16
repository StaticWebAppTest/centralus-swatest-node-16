module.exports = async function (context, req) {
  const date = "2024-01-16T20:10:28.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

