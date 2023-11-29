module.exports = async function (context, req) {
  const date = "2023-11-29T02:22:42.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

