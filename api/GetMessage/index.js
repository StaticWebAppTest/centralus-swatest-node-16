module.exports = async function (context, req) {
  const date = "2023-08-25T18:10:33.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

