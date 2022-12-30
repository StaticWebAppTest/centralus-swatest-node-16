module.exports = async function (context, req) {
  const date = "2022-12-30T07:08:23.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

