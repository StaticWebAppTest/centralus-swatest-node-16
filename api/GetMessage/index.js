module.exports = async function (context, req) {
  const date = "2022-12-03T02:07:43.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

