module.exports = async function (context, req) {
  const date = "2022-08-04T23:10:28.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

