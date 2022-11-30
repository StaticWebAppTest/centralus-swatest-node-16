module.exports = async function (context, req) {
  const date = "2022-11-30T04:13:08.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

