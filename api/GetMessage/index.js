module.exports = async function (context, req) {
  const date = "2023-08-11T04:10:20.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

