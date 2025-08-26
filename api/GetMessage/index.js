module.exports = async function (context, req) {
  const date = "2025-08-26T08:19:13.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

