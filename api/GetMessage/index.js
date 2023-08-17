module.exports = async function (context, req) {
  const date = "2023-08-17T01:38:08.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

