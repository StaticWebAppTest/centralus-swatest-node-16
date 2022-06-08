module.exports = async function (context, req) {
  const date = "2022-06-08T16:13:45.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

