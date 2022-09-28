module.exports = async function (context, req) {
  const date = "2022-09-28T01:11:36.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

