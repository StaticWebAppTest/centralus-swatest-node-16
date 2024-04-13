module.exports = async function (context, req) {
  const date = "2024-04-13T05:11:04.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

