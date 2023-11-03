module.exports = async function (context, req) {
  const date = "2023-11-03T01:44:20.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

