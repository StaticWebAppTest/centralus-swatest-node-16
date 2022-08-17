module.exports = async function (context, req) {
  const date = "2022-08-17T15:12:23.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

