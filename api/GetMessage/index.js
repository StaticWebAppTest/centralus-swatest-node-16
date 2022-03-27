module.exports = async function (context, req) {
  const date = "2022-03-27T23:10:42.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

