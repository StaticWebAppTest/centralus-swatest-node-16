module.exports = async function (context, req) {
  const date = "2023-01-24T04:11:40.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

