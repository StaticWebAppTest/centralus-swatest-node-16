module.exports = async function (context, req) {
  const date = "2022-09-10T15:11:38.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

