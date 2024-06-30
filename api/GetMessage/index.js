module.exports = async function (context, req) {
  const date = "2024-06-30T12:18:08.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

