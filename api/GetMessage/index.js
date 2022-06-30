module.exports = async function (context, req) {
  const date = "2022-06-30T05:18:42.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

