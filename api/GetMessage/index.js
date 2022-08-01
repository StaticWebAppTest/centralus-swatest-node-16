module.exports = async function (context, req) {
  const date = "2022-08-01T17:20:32.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

