module.exports = async function (context, req) {
  const date = "2023-03-15T22:09:09.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

