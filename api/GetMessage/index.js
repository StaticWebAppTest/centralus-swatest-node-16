module.exports = async function (context, req) {
  const date = "2023-03-01T21:09:20.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

