module.exports = async function (context, req) {
  const date = "2023-06-16T09:08:36.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

