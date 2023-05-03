module.exports = async function (context, req) {
  const date = "2023-05-03T02:31:46.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

