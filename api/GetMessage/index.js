module.exports = async function (context, req) {
  const date = "2023-07-14T18:11:38.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

