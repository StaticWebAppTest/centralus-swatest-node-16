module.exports = async function (context, req) {
  const date = "2023-06-03T05:08:03.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

