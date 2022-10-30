module.exports = async function (context, req) {
  const date = "2022-10-30T10:12:06.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

