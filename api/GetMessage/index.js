module.exports = async function (context, req) {
  const date = "2024-07-13T05:10:22.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

