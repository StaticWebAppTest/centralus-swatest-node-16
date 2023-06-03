module.exports = async function (context, req) {
  const date = "2023-06-03T06:10:42.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

