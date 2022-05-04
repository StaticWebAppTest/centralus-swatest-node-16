module.exports = async function (context, req) {
  const date = "2022-05-04T05:14:41.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

