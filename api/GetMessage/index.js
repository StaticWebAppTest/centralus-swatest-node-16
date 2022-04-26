module.exports = async function (context, req) {
  const date = "2022-04-26T02:57:40.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

