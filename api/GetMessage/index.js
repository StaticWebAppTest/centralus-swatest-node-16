module.exports = async function (context, req) {
  const date = "2024-05-12T18:13:08.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

