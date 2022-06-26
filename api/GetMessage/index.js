module.exports = async function (context, req) {
  const date = "2022-06-26T04:23:26.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

