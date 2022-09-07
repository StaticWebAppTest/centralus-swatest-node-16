module.exports = async function (context, req) {
  const date = "2022-09-07T06:10:37.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

