module.exports = async function (context, req) {
  const date = "2022-10-30T14:10:13.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

