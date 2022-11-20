module.exports = async function (context, req) {
  const date = "2022-11-20T01:02:01.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

