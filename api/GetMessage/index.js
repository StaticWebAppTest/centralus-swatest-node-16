module.exports = async function (context, req) {
  const date = "2022-06-18T02:57:09.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

