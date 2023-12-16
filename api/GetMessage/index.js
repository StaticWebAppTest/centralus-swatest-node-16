module.exports = async function (context, req) {
  const date = "2023-12-16T16:10:28.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

