module.exports = async function (context, req) {
  const date = "2023-05-18T04:10:25.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

