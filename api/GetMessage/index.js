module.exports = async function (context, req) {
  const date = "2023-03-27T10:10:30.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

