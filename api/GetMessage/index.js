module.exports = async function (context, req) {
  const date = "2022-11-07T17:21:42.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

