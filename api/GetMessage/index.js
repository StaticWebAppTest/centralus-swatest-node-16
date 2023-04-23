module.exports = async function (context, req) {
  const date = "2023-04-23T00:52:21.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

