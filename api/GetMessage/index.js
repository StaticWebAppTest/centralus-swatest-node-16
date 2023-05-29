module.exports = async function (context, req) {
  const date = "2023-05-29T03:09:45.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

