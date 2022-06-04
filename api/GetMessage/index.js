module.exports = async function (context, req) {
  const date = "2022-06-04T05:09:15.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

