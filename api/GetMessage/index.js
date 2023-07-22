module.exports = async function (context, req) {
  const date = "2023-07-22T17:07:13.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

