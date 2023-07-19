module.exports = async function (context, req) {
  const date = "2023-07-19T04:16:18.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

