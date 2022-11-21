module.exports = async function (context, req) {
  const date = "2022-11-21T07:10:37.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

