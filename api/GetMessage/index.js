module.exports = async function (context, req) {
  const date = "2023-03-28T00:51:37.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

