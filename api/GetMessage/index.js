module.exports = async function (context, req) {
  const date = "2023-12-27T12:16:08.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

