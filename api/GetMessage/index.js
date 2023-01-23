module.exports = async function (context, req) {
  const date = "2023-01-23T14:09:18.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

