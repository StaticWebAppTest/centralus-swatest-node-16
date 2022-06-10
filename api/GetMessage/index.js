module.exports = async function (context, req) {
  const date = "2022-06-10T17:14:37.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

