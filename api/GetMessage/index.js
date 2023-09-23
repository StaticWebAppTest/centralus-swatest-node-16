module.exports = async function (context, req) {
  const date = "2023-09-23T00:39:06.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

