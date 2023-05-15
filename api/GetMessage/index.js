module.exports = async function (context, req) {
  const date = "2023-05-15T14:08:23.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

