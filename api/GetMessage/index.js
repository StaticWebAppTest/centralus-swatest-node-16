module.exports = async function (context, req) {
  const date = "2022-12-22T14:08:45.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

