module.exports = async function (context, req) {
  const date = "2022-10-14T23:14:11.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

