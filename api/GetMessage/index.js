module.exports = async function (context, req) {
  const date = "2022-10-19T15:17:03.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

