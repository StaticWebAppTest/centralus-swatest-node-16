module.exports = async function (context, req) {
  const date = "2023-04-04T18:09:27.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

