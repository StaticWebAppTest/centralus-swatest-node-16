module.exports = async function (context, req) {
  const date = "2023-10-14T17:07:16.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

