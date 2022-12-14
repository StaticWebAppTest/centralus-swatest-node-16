module.exports = async function (context, req) {
  const date = "2022-12-14T16:13:21.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

