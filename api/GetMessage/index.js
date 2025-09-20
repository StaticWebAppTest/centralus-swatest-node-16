module.exports = async function (context, req) {
  const date = "2025-09-20T18:15:33.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

