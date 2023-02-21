module.exports = async function (context, req) {
  const date = "2023-02-21T14:09:26.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

