module.exports = async function (context, req) {
  const date = "2022-11-14T04:36:06.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

