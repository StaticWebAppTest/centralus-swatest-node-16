module.exports = async function (context, req) {
  const date = "2023-05-15T02:03:39.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

