module.exports = async function (context, req) {
  const date = "2022-12-22T13:16:10.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

