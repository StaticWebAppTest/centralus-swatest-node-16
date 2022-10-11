module.exports = async function (context, req) {
  const date = "2022-10-11T04:05:34.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

