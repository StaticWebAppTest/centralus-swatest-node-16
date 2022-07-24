module.exports = async function (context, req) {
  const date = "2022-07-24T06:13:21.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

