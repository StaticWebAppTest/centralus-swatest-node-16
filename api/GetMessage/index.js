module.exports = async function (context, req) {
  const date = "2023-04-23T06:11:12.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

