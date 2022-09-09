module.exports = async function (context, req) {
  const date = "2022-09-09T09:13:46.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

