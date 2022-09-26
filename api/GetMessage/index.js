module.exports = async function (context, req) {
  const date = "2022-09-26T20:13:33.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

