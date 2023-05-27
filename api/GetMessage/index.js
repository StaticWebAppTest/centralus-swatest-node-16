module.exports = async function (context, req) {
  const date = "2023-05-27T16:10:39.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

