module.exports = async function (context, req) {
  const date = "2024-11-08T18:15:10.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

