module.exports = async function (context, req) {
  const date = "2023-04-05T11:08:10.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

