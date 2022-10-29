module.exports = async function (context, req) {
  const date = "2022-10-29T20:12:05.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

