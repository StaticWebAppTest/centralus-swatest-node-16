module.exports = async function (context, req) {
  const date = "2024-03-30T13:10:41.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

