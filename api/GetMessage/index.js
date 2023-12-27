module.exports = async function (context, req) {
  const date = "2023-12-27T05:08:50.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

