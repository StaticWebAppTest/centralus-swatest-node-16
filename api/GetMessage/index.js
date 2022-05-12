module.exports = async function (context, req) {
  const date = "2022-05-12T16:16:37.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

