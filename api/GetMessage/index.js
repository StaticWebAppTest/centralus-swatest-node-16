module.exports = async function (context, req) {
  const date = "2023-09-22T12:16:22.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

