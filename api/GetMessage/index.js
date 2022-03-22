module.exports = async function (context, req) {
  const date = "2022-03-22T05:09:26.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

