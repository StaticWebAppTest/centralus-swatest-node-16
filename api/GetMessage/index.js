module.exports = async function (context, req) {
  const date = "2022-05-22T06:13:45.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

