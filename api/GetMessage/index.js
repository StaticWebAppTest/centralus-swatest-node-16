module.exports = async function (context, req) {
  const date = "2022-11-05T04:20:22.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

