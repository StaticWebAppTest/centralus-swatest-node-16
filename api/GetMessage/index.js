module.exports = async function (context, req) {
  const date = "2022-07-23T16:14:04.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

