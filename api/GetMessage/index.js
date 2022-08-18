module.exports = async function (context, req) {
  const date = "2022-08-18T09:12:18.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

