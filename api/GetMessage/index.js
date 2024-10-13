module.exports = async function (context, req) {
  const date = "2024-10-13T14:09:27.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

