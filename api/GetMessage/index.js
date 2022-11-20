module.exports = async function (context, req) {
  const date = "2022-11-20T23:11:02.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

