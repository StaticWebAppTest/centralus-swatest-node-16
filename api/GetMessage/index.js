module.exports = async function (context, req) {
  const date = "2022-09-04T04:03:58.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

