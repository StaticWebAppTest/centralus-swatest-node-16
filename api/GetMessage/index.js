module.exports = async function (context, req) {
  const date = "2022-09-12T01:10:14.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

