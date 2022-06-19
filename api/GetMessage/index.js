module.exports = async function (context, req) {
  const date = "2022-06-19T07:09:28.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

