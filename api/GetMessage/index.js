module.exports = async function (context, req) {
  const date = "2022-11-22T04:13:47.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

