module.exports = async function (context, req) {
  const date = "2022-10-16T16:17:37.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

