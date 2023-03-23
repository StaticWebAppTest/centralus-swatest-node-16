module.exports = async function (context, req) {
  const date = "2023-03-23T13:16:14.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

