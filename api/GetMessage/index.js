module.exports = async function (context, req) {
  const date = "2023-10-18T23:08:52.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

