module.exports = async function (context, req) {
  const date = "2023-09-19T04:10:48.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

