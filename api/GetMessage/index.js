module.exports = async function (context, req) {
  const date = "2024-08-14T11:10:08.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

