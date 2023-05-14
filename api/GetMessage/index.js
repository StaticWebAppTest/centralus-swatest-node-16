module.exports = async function (context, req) {
  const date = "2023-05-14T13:08:53.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

