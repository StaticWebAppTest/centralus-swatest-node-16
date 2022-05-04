module.exports = async function (context, req) {
  const date = "2022-05-04T18:13:14.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

