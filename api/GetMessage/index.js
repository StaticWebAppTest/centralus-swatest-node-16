module.exports = async function (context, req) {
  const date = "2022-11-03T06:14:52.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

