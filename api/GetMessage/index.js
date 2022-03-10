module.exports = async function (context, req) {
  const date = "2022-03-10T16:14:03.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

