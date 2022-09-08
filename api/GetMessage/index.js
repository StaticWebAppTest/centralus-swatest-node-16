module.exports = async function (context, req) {
  const date = "2022-09-08T23:13:18.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

