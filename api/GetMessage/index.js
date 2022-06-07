module.exports = async function (context, req) {
  const date = "2022-06-07T09:10:26.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

