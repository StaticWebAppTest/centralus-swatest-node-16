module.exports = async function (context, req) {
  const date = "2022-10-30T07:10:13.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

