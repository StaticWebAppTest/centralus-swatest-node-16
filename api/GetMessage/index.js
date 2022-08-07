module.exports = async function (context, req) {
  const date = "2022-08-07T01:04:15.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

