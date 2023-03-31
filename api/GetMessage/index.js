module.exports = async function (context, req) {
  const date = "2023-03-31T07:08:30.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

