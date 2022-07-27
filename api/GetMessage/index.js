module.exports = async function (context, req) {
  const date = "2022-07-27T22:10:50.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

