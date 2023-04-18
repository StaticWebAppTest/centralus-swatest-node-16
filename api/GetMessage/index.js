module.exports = async function (context, req) {
  const date = "2023-04-18T02:30:10.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

