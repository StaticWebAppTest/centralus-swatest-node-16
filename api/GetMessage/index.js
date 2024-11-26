module.exports = async function (context, req) {
  const date = "2024-11-26T14:12:18.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

