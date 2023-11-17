module.exports = async function (context, req) {
  const date = "2023-11-17T18:12:02.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

