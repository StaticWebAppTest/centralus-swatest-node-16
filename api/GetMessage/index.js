module.exports = async function (context, req) {
  const date = "2022-08-08T18:14:49.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

