module.exports = async function (context, req) {
  const date = "2022-07-16T09:10:28.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

