module.exports = async function (context, req) {
  const date = "2023-10-07T14:07:13.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

