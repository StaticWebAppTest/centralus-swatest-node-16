module.exports = async function (context, req) {
  const date = "2023-12-22T07:08:30.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

