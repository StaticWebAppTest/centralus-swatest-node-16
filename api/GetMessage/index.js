module.exports = async function (context, req) {
  const date = "2024-03-23T07:09:42.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

