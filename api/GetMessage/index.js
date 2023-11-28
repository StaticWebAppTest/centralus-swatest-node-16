module.exports = async function (context, req) {
  const date = "2023-11-28T23:09:03.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

