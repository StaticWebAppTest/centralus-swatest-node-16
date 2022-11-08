module.exports = async function (context, req) {
  const date = "2022-11-08T04:36:52.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

