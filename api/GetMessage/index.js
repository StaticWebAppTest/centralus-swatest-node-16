module.exports = async function (context, req) {
  const date = "2023-07-05T07:10:15.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

