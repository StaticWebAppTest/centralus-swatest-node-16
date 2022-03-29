module.exports = async function (context, req) {
  const date = "2022-03-29T18:12:24.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

