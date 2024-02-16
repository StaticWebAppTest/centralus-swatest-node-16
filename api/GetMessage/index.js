module.exports = async function (context, req) {
  const date = "2024-02-16T11:07:12.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

