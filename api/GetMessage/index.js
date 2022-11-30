module.exports = async function (context, req) {
  const date = "2022-11-30T10:11:09.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

