module.exports = async function (context, req) {
  const date = "2024-06-14T00:46:40.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

