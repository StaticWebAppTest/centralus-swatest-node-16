module.exports = async function (context, req) {
  const date = "2022-11-12T17:11:42.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

