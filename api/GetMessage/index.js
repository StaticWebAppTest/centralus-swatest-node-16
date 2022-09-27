module.exports = async function (context, req) {
  const date = "2022-09-27T09:21:39.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

