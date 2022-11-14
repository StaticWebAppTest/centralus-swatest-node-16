module.exports = async function (context, req) {
  const date = "2022-11-14T15:13:04.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

