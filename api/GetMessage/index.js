module.exports = async function (context, req) {
  const date = "2023-10-28T15:07:56.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

