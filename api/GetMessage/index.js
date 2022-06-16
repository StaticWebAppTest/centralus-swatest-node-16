module.exports = async function (context, req) {
  const date = "2022-06-16T14:09:35.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

