module.exports = async function (context, req) {
  const date = "2023-06-15T07:09:10.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

