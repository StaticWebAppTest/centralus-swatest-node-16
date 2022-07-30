module.exports = async function (context, req) {
  const date = "2022-07-30T05:14:55.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

