module.exports = async function (context, req) {
  const date = "2023-03-23T21:08:03.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

