module.exports = async function (context, req) {
  const date = "2024-02-17T18:10:26.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

