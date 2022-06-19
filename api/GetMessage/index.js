module.exports = async function (context, req) {
  const date = "2022-06-19T06:12:41.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

