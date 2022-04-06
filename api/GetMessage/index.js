module.exports = async function (context, req) {
  const date = "2022-04-06T05:09:50.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

