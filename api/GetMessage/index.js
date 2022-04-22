module.exports = async function (context, req) {
  const date = "2022-04-22T07:10:30.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

