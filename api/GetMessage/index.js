module.exports = async function (context, req) {
  const date = "2022-09-28T23:13:22.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

