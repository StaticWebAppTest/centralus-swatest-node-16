module.exports = async function (context, req) {
  const date = "2023-11-29T11:07:51.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

