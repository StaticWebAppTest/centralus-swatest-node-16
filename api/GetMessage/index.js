module.exports = async function (context, req) {
  const date = "2022-03-30T15:10:58.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

