module.exports = async function (context, req) {
  const date = "2023-09-15T04:10:37.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

