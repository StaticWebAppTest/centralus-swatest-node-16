module.exports = async function (context, req) {
  const date = "2022-10-05T22:16:50.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

