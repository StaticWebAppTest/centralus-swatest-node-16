module.exports = async function (context, req) {
  const date = "2023-10-29T16:11:14.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

