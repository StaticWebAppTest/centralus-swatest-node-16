module.exports = async function (context, req) {
  const date = "2023-06-23T22:09:33.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

