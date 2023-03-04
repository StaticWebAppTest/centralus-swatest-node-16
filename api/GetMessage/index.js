module.exports = async function (context, req) {
  const date = "2023-03-04T15:09:08.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

