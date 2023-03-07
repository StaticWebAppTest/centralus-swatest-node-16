module.exports = async function (context, req) {
  const date = "2023-03-07T15:10:29.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

