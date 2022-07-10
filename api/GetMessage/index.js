module.exports = async function (context, req) {
  const date = "2022-07-10T04:21:18.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

