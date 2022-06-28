module.exports = async function (context, req) {
  const date = "2022-06-28T23:10:15.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

