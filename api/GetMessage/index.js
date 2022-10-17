module.exports = async function (context, req) {
  const date = "2022-10-17T14:33:11.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

