module.exports = async function (context, req) {
  const date = "2022-06-04T14:08:52.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

