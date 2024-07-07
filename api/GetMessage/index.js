module.exports = async function (context, req) {
  const date = "2024-07-07T22:10:16.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

