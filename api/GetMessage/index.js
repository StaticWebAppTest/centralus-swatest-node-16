module.exports = async function (context, req) {
  const date = "2023-05-14T04:10:25.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

