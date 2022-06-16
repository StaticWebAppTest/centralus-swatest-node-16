module.exports = async function (context, req) {
  const date = "2022-06-16T07:10:14.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

