module.exports = async function (context, req) {
  const date = "2022-11-04T18:14:11.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

