module.exports = async function (context, req) {
  const date = "2023-06-07T00:57:23.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

