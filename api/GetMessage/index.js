module.exports = async function (context, req) {
  const date = "2022-03-14T02:08:23.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

