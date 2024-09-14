module.exports = async function (context, req) {
  const date = "2024-09-14T18:13:48.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

