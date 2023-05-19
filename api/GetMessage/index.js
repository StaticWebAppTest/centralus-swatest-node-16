module.exports = async function (context, req) {
  const date = "2023-05-19T19:06:50.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

