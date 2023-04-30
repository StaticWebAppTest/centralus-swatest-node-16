module.exports = async function (context, req) {
  const date = "2023-04-30T04:10:21.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

