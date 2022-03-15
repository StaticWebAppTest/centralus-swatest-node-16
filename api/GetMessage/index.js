module.exports = async function (context, req) {
  const date = "2022-03-15T07:10:31.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

