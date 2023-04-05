module.exports = async function (context, req) {
  const date = "2023-04-05T17:08:46.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

