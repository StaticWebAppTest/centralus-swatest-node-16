module.exports = async function (context, req) {
  const date = "2022-11-12T07:10:57.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

