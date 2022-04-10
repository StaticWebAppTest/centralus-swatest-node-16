module.exports = async function (context, req) {
  const date = "2022-04-10T23:10:14.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

