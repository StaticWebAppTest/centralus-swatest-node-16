module.exports = async function (context, req) {
  const date = "2022-07-29T18:13:56.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

