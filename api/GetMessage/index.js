module.exports = async function (context, req) {
  const date = "2022-07-30T03:13:12.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

