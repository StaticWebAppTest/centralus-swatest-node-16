module.exports = async function (context, req) {
  const date = "2023-02-11T03:10:20.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

