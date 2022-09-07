module.exports = async function (context, req) {
  const date = "2022-09-07T07:36:12.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

