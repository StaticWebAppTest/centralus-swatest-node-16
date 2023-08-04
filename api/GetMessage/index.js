module.exports = async function (context, req) {
  const date = "2023-08-04T05:07:52.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

