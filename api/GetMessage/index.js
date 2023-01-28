module.exports = async function (context, req) {
  const date = "2023-01-28T14:07:44.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

