module.exports = async function (context, req) {
  const date = "2023-08-28T13:11:15.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

