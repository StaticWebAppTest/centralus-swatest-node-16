module.exports = async function (context, req) {
  const date = "2022-10-04T05:39:48.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

