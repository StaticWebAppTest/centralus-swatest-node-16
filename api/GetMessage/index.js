module.exports = async function (context, req) {
  const date = "2023-05-23T12:16:47.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

