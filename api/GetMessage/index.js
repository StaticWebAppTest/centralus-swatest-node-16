module.exports = async function (context, req) {
  const date = "2022-09-16T11:10:13.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

