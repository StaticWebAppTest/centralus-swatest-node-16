module.exports = async function (context, req) {
  const date = "2022-05-19T09:11:37.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

