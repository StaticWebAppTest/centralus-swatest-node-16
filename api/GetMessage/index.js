module.exports = async function (context, req) {
  const date = "2023-09-11T04:10:37.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

