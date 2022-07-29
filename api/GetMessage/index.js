module.exports = async function (context, req) {
  const date = "2022-07-29T05:23:16.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

