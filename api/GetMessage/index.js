module.exports = async function (context, req) {
  const date = "2022-02-27T22:09:16.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

