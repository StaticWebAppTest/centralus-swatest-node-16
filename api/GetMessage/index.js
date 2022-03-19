module.exports = async function (context, req) {
  const date = "2022-03-19T09:10:20.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

