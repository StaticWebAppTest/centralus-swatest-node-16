module.exports = async function (context, req) {
  const date = "2023-07-06T22:09:26.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

