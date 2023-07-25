module.exports = async function (context, req) {
  const date = "2023-07-25T08:11:56.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

