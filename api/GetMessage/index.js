module.exports = async function (context, req) {
  const date = "2024-07-04T08:13:53.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

