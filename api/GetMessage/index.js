module.exports = async function (context, req) {
  const date = "2022-03-14T07:10:18.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

