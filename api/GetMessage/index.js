module.exports = async function (context, req) {
  const date = "2022-11-30T09:10:33.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

