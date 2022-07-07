module.exports = async function (context, req) {
  const date = "2022-07-07T01:01:56.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

