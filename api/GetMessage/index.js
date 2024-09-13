module.exports = async function (context, req) {
  const date = "2024-09-13T15:10:58.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

