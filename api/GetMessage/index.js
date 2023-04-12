module.exports = async function (context, req) {
  const date = "2023-04-12T15:09:20.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

