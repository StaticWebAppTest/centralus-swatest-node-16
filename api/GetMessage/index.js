module.exports = async function (context, req) {
  const date = "2022-06-07T05:09:14.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

