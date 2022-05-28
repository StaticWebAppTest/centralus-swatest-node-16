module.exports = async function (context, req) {
  const date = "2022-05-28T09:10:37.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

