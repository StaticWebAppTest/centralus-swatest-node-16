module.exports = async function (context, req) {
  const date = "2023-06-23T00:59:40.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

