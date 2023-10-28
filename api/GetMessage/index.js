module.exports = async function (context, req) {
  const date = "2023-10-28T00:39:33.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

