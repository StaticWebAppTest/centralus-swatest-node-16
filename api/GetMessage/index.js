module.exports = async function (context, req) {
  const date = "2022-03-22T04:12:40.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

