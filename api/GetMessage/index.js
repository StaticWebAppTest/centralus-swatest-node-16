module.exports = async function (context, req) {
  const date = "2023-02-13T22:09:33.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

