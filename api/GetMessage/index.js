module.exports = async function (context, req) {
  const date = "2024-12-31T18:15:08.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

