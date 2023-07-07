module.exports = async function (context, req) {
  const date = "2023-07-07T23:09:26.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

