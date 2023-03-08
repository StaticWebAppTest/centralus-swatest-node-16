module.exports = async function (context, req) {
  const date = "2023-03-08T20:10:46.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

