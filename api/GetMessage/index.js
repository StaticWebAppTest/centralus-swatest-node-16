module.exports = async function (context, req) {
  const date = "2022-06-17T07:10:41.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

