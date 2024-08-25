module.exports = async function (context, req) {
  const date = "2024-08-25T18:12:42.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

