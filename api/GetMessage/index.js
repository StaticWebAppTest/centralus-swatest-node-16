module.exports = async function (context, req) {
  const date = "2022-05-12T05:17:59.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

