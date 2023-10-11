module.exports = async function (context, req) {
  const date = "2023-10-11T22:08:01.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

