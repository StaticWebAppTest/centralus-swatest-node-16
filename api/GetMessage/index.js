module.exports = async function (context, req) {
  const date = "2022-10-19T04:14:51.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

