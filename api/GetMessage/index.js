module.exports = async function (context, req) {
  const date = "2022-04-30T23:10:22.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

