module.exports = async function (context, req) {
  const date = "2023-03-01T20:11:03.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

