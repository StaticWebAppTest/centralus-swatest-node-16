module.exports = async function (context, req) {
  const date = "2023-11-07T18:11:17.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

