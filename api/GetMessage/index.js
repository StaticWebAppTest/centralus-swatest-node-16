module.exports = async function (context, req) {
  const date = "2023-10-13T16:11:14.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

