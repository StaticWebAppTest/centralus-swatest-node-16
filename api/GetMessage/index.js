module.exports = async function (context, req) {
  const date = "2024-04-22T21:08:22.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

