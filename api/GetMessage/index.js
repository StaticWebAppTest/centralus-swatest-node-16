module.exports = async function (context, req) {
  const date = "2023-01-23T17:09:11.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

