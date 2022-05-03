module.exports = async function (context, req) {
  const date = "2022-05-03T16:16:37.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

