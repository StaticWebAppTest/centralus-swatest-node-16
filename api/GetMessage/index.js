module.exports = async function (context, req) {
  const date = "2022-03-07T23:09:49.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

