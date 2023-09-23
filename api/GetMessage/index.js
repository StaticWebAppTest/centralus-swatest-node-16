module.exports = async function (context, req) {
  const date = "2023-09-23T23:07:47.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

