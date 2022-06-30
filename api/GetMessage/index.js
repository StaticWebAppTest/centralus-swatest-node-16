module.exports = async function (context, req) {
  const date = "2022-06-30T09:10:18.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

