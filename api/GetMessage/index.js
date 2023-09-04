module.exports = async function (context, req) {
  const date = "2023-09-04T05:08:26.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

