module.exports = async function (context, req) {
  const date = "2023-05-11T03:09:15.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

