module.exports = async function (context, req) {
  const date = "2023-11-15T18:11:54.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

