module.exports = async function (context, req) {
  const date = "2023-09-12T18:10:59.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

