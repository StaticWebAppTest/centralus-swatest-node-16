module.exports = async function (context, req) {
  const date = "2023-05-22T17:08:01.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

