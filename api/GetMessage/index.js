module.exports = async function (context, req) {
  const date = "2023-01-09T21:09:09.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

