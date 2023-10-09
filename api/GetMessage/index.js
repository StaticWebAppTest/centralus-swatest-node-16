module.exports = async function (context, req) {
  const date = "2023-10-09T04:10:47.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

