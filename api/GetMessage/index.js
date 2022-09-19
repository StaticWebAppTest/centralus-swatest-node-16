module.exports = async function (context, req) {
  const date = "2022-09-19T15:13:03.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

