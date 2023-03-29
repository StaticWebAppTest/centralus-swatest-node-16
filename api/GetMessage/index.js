module.exports = async function (context, req) {
  const date = "2023-03-29T13:18:03.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

