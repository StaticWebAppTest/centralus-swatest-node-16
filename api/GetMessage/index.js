module.exports = async function (context, req) {
  const date = "2022-11-22T14:10:02.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

