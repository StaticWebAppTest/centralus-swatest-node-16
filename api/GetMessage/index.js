module.exports = async function (context, req) {
  const date = "2023-03-24T19:07:17.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

