module.exports = async function (context, req) {
  const date = "2022-09-21T18:15:24.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

