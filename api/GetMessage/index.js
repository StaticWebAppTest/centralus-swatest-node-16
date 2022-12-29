module.exports = async function (context, req) {
  const date = "2022-12-29T08:12:08.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

