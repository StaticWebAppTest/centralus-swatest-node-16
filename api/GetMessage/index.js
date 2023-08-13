module.exports = async function (context, req) {
  const date = "2023-08-13T18:09:22.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

