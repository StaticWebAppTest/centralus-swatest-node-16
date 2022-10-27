module.exports = async function (context, req) {
  const date = "2022-10-27T05:22:15.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

