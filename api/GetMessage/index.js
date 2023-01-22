module.exports = async function (context, req) {
  const date = "2023-01-22T08:11:52.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

