module.exports = async function (context, req) {
  const date = "2023-03-03T10:10:40.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

