module.exports = async function (context, req) {
  const date = "2023-11-19T06:11:20.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

