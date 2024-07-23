module.exports = async function (context, req) {
  const date = "2024-07-23T08:14:52.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

