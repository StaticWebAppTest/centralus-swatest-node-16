module.exports = async function (context, req) {
  const date = "2022-08-28T09:10:48.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

