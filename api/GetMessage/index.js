module.exports = async function (context, req) {
  const date = "2023-12-17T06:11:08.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

