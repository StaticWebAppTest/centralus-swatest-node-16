module.exports = async function (context, req) {
  const date = "2022-09-25T15:12:16.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

