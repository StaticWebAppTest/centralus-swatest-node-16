module.exports = async function (context, req) {
  const date = "2022-06-03T03:39:45.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

