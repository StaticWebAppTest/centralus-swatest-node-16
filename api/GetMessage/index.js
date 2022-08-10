module.exports = async function (context, req) {
  const date = "2022-08-10T10:11:57.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

