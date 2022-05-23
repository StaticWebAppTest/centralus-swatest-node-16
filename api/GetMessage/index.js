module.exports = async function (context, req) {
  const date = "2022-05-23T02:52:41.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

