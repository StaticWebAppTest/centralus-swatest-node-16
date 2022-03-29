module.exports = async function (context, req) {
  const date = "2022-03-29T16:14:20.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

