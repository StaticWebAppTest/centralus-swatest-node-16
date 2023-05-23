module.exports = async function (context, req) {
  const date = "2023-05-23T07:08:30.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

