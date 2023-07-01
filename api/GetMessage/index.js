module.exports = async function (context, req) {
  const date = "2023-07-01T14:07:54.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

