module.exports = async function (context, req) {
  const date = "2023-03-07T14:09:34.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

