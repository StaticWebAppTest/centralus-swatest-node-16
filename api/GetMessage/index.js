module.exports = async function (context, req) {
  const date = "2024-04-16T05:10:05.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

