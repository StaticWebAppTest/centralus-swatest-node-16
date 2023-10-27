module.exports = async function (context, req) {
  const date = "2023-10-27T21:07:13.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

