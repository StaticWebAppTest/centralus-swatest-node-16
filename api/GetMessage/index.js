module.exports = async function (context, req) {
  const date = "2023-10-31T04:10:46.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

