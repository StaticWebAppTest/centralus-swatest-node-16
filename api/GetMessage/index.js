module.exports = async function (context, req) {
  const date = "2023-11-23T02:21:47.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

