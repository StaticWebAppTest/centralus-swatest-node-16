module.exports = async function (context, req) {
  const date = "2022-11-22T06:14:11.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

