module.exports = async function (context, req) {
  const date = "2022-04-30T11:08:52.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

