module.exports = async function (context, req) {
  const date = "2022-05-19T23:11:19.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

