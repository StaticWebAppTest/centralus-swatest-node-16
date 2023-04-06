module.exports = async function (context, req) {
  const date = "2023-04-06T08:11:27.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

