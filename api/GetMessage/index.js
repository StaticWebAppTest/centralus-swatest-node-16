module.exports = async function (context, req) {
  const date = "2023-05-14T08:10:04.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

