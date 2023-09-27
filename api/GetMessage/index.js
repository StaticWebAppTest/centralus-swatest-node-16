module.exports = async function (context, req) {
  const date = "2023-09-27T10:09:36.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

