module.exports = async function (context, req) {
  const date = "2024-04-25T04:11:42.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

