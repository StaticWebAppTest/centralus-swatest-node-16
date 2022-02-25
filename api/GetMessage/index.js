module.exports = async function (context, req) {
  const date = "2022-02-25T06:12:16.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

