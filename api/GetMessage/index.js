module.exports = async function (context, req) {
  const date = "2023-11-05T14:07:10.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

