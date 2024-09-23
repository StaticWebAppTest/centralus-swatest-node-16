module.exports = async function (context, req) {
  const date = "2024-09-23T14:11:06.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

