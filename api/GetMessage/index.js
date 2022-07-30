module.exports = async function (context, req) {
  const date = "2022-07-30T04:31:45.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

