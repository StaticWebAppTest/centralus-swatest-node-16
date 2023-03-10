module.exports = async function (context, req) {
  const date = "2023-03-10T00:55:23.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

