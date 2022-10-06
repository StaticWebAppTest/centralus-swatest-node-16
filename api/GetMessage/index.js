module.exports = async function (context, req) {
  const date = "2022-10-06T15:15:49.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

