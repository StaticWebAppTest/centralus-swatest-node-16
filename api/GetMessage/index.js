module.exports = async function (context, req) {
  const date = "2023-10-14T07:07:26.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

