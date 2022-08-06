module.exports = async function (context, req) {
  const date = "2022-08-06T05:10:02.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

