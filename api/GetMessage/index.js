module.exports = async function (context, req) {
  const date = "2023-03-16T10:10:47.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

