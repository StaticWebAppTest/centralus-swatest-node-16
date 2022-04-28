module.exports = async function (context, req) {
  const date = "2022-04-28T17:16:20.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

