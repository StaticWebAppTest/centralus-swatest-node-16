module.exports = async function (context, req) {
  const date = "2023-06-04T09:09:14.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

