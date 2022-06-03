module.exports = async function (context, req) {
  const date = "2022-06-03T05:10:32.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

