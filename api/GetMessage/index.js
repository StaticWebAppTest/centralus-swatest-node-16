module.exports = async function (context, req) {
  const date = "2023-10-17T06:12:17.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

