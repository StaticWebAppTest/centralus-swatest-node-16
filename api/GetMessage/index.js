module.exports = async function (context, req) {
  const date = "2023-11-11T00:41:08.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

