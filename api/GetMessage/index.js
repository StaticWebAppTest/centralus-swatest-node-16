module.exports = async function (context, req) {
  const date = "2022-06-04T07:10:10.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

