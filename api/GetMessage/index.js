module.exports = async function (context, req) {
  const date = "2022-11-30T15:11:03.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

