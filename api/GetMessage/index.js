module.exports = async function (context, req) {
  const date = "2023-12-29T11:08:15.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

