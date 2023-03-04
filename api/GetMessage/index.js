module.exports = async function (context, req) {
  const date = "2023-03-04T06:12:15.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

