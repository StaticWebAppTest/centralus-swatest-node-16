module.exports = async function (context, req) {
  const date = "2023-03-14T14:11:03.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

