module.exports = async function (context, req) {
  const date = "2023-06-28T23:09:45.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

