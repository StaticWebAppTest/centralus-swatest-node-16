module.exports = async function (context, req) {
  const date = "2023-11-18T00:42:22.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

