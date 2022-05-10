module.exports = async function (context, req) {
  const date = "2022-05-10T16:17:26.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

