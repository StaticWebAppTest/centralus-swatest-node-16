module.exports = async function (context, req) {
  const date = "2023-10-08T00:43:57.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

