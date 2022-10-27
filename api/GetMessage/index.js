module.exports = async function (context, req) {
  const date = "2022-10-27T03:39:26.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

