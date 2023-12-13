module.exports = async function (context, req) {
  const date = "2023-12-13T17:08:44.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

