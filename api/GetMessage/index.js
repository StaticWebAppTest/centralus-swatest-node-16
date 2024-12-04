module.exports = async function (context, req) {
  const date = "2024-12-04T18:17:43.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

