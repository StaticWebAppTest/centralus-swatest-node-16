module.exports = async function (context, req) {
  const date = "2022-07-18T07:10:04.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

