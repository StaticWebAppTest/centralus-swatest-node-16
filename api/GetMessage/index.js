module.exports = async function (context, req) {
  const date = "2022-11-15T16:15:27.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

