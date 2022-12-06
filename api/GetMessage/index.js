module.exports = async function (context, req) {
  const date = "2022-12-06T02:14:08.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

