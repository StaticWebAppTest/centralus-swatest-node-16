module.exports = async function (context, req) {
  const date = "2022-03-04T14:09:16.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

