module.exports = async function (context, req) {
  const date = "2023-12-05T04:11:21.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

