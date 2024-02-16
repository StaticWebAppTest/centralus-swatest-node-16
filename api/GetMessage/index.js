module.exports = async function (context, req) {
  const date = "2024-02-16T15:09:53.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

