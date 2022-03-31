module.exports = async function (context, req) {
  const date = "2022-03-31T05:09:40.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

