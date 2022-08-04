module.exports = async function (context, req) {
  const date = "2022-08-04T05:25:16.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

