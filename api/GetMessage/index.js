module.exports = async function (context, req) {
  const date = "2023-08-27T05:07:20.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

