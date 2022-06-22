module.exports = async function (context, req) {
  const date = "2022-06-22T04:28:30.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

