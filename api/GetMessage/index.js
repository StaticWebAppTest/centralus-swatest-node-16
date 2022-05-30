module.exports = async function (context, req) {
  const date = "2022-05-30T16:15:36.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

