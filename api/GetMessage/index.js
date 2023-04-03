module.exports = async function (context, req) {
  const date = "2023-04-03T15:09:21.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

