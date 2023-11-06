module.exports = async function (context, req) {
  const date = "2023-11-06T05:09:02.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

