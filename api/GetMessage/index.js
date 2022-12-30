module.exports = async function (context, req) {
  const date = "2022-12-30T09:08:54.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

