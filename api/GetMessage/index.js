module.exports = async function (context, req) {
  const date = "2023-07-11T00:55:16.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

