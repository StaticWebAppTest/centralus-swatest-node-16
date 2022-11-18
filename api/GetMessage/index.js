module.exports = async function (context, req) {
  const date = "2022-11-18T04:14:36.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

