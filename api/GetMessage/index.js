module.exports = async function (context, req) {
  const date = "2023-07-25T15:09:15.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

