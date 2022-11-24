module.exports = async function (context, req) {
  const date = "2022-11-24T07:10:01.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

