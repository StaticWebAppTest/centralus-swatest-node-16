module.exports = async function (context, req) {
  const date = "2022-08-10T05:10:18.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

