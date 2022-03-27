module.exports = async function (context, req) {
  const date = "2022-03-27T05:09:10.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

