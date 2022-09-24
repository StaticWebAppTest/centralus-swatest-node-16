module.exports = async function (context, req) {
  const date = "2022-09-24T07:13:34.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

