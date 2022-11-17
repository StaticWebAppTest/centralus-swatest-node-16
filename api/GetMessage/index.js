module.exports = async function (context, req) {
  const date = "2022-11-17T18:13:16.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

