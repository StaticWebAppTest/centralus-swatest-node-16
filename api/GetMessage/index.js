module.exports = async function (context, req) {
  const date = "2023-02-16T07:09:28.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

