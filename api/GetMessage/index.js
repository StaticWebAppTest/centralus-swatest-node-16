module.exports = async function (context, req) {
  const date = "2023-10-14T00:39:39.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

