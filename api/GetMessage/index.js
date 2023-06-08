module.exports = async function (context, req) {
  const date = "2023-06-08T21:09:12.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

