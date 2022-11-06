module.exports = async function (context, req) {
  const date = "2022-11-06T04:20:42.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

