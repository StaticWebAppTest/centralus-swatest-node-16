module.exports = async function (context, req) {
  const date = "2023-12-23T15:08:15.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

