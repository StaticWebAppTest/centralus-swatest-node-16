module.exports = async function (context, req) {
  const date = "2023-05-06T14:07:05.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

