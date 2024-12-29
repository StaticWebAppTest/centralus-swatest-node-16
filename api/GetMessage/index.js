module.exports = async function (context, req) {
  const date = "2024-12-29T15:10:12.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

