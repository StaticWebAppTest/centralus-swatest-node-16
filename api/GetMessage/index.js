module.exports = async function (context, req) {
  const date = "2024-07-04T23:10:20.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

