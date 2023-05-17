module.exports = async function (context, req) {
  const date = "2023-05-17T06:11:38.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

