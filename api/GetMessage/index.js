module.exports = async function (context, req) {
  const date = "2023-10-21T17:07:14.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

